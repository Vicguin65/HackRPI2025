provider "aws" {
  region = "us-east-1"  # Specify your AWS region
}

# Fetch the default VPC
resource "aws_default_vpc" "default" {
  tags = {
    Name = "Default VPC"
  }
}

resource "aws_default_subnet" "default_az1" {
  availability_zone = "us-east-1a"

  tags = {
    Name = "Default subnet for us-east-1a"
  }
}

resource "aws_default_subnet" "default_az2" {
  availability_zone = "us-east-1b"

  tags = {
    Name = "Default subnet for us-east-1a"
  }
}

# Create EC2 Security Group
resource "aws_security_group" "ec2_sg" {
  name        = "ec2-sg"
  description = "Allow inbound HTTP/HTTPS traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create the EC2 instance in the default subnet
resource "aws_instance" "web" {
  ami           = "ami-0866a3c8686eaeeba"  # Replace with your preferred AMI
  instance_type = "t2.micro"
  subnet_id     = aws_default_subnet.default_az1.id
  security_groups = [aws_security_group.ec2_sg.name]

  tags = {
    Name = "MyWebServer"
  }
}

# Create the Application Load Balancer (ALB)
resource "aws_lb" "web_lb" {
  name               = "my-web-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = [aws_default_subnet.default_az1.id, aws_default_subnet.default_az2.id]  # Using all default subnets
  security_groups    = [aws_security_group.ec2_sg.id]

  tags = {
    Name = "my-web-alb"
  }
}

# Create the Target Group
resource "aws_lb_target_group" "web_target_group" {
  name     = "web-target-group"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_default_vpc.default.id
}

# Create the HTTPS Listener
resource "aws_lb_listener" "https_listener" {
  load_balancer_arn = aws_lb.web_lb.arn
  port              = "443"
  protocol          = "HTTPS"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.web_target_group.arn
  }

  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = "arn:aws:acm:us-west-1:416469482962:certificate/c28d836d-4a2c-4097-bb99-0a5705e17eac"  # Your ACM certificate ARN
}

# Attach the EC2 instance to the target group
resource "aws_lb_target_group_attachment" "web_target_attachment" {
  target_group_arn = aws_lb_target_group.web_target_group.arn
  target_id        = aws_instance.web.id
  port             = 80
}

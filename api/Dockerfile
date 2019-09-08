FROM python:3.7

# Set working directory
WORKDIR /usr/src/app

# Copy files to working directory
ADD . /usr/src/app

# Install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

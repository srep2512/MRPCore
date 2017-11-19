# DEMO
https://htwmrp.herokuapp.com/

# MRP algorithms
This Repository contains a Spring Boot application with different routes for calculating typical production planning algorithms.
Follow the steps to set up a development environment or to run the standalone application.
  
# Quick Start

# 1 Development environment

## 1.1 Prerequesites
Download [Eclipse]:(http://www.eclipse.org/downloads/eclipse-packages/)
Download and install [Java JDK8]:(http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
Download and install [GIT]: (https://git-for-windows.github.io/)  

Make sure to set the JAVA_HOME environment variable correct.

## 1.2 Repository
Open Git Bash and clone the repository. Import the downloaded project in your favorit IDE as a gradle Project.
e.g. eclipse: File --> Import --> Gradle --> Existing Gradle Project

> git clone https://github.com/srep2512/MRPCore

## 1.3 Start up
Start the Application and open a browser http://localhost:8080

# Routes

The following routes a available: 
> http://localhost:8080/giffler  
Returns an optimized production plan as JSON String
ATTENTION: The optimization is calculated based on the "shortest processing time". This is a very simple yet not the best priority rule in this algorithm.

# Fields of Research
This project offers a variety of scientific fields to work on. Especially computer scientists and economists could explore different subjects.

The following fields are covered in this project:  
- Frontend Development with VueJS/HTML/CSS
- Backend Development with SpringBoot/Java
- Production planning algorithms (e.g. Giffler-Thomson, Retrograd calculation, progressive calculation)
- RESTApi Design 





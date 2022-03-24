FROM openjdk:latest
ADD target/job-management-service-0.0.1-SNAPSHOT.jar /usr
WORKDIR /usr
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "job-management-service-0.0.1-SNAPSHOT.jar"]
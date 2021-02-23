# What is VPC (Virtual Private Cloud)?

![VPC Image](https://miro.medium.com/max/1200/1*VKTHtHwo3pUxeDP0ZmrOoA.jpeg)

In AWS Virtual Private Cloud is a service that lets you launch AWS resources is a logically isolated virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways. You can use both IPv4 and IPv6 for most resources in your virtual private cloud, helping to ensure secure and easy access to resources and applications.

### Lets create a VPC

At the end of this step you’ll have a VPC with two Availability Zones (AZ). Each AZ will have a Private Subnet.

![VPC Logical Diagram](https://intro-to-cdk.workshop.aws/images/create-a-vpc/architecture-vpc.png)

1: To setup the VPC you need to install a boilerplate by running the following command

``` 
cdk init app –language typescript
```


2: Now you need to install the EC2 library

```
npm install @aws-cdk/aws-ec2 
OR
yarn add @aws-cdk/aws-ec2
```

3:  Open the stack file under the lib folder:
Import the ec2 library & add this code in stack
```
const vpc = new ec2.Vpc(this, "VPC", {
      subnetConfiguration: [
        {
          name: "Ingress",
          cidrMask: 24,
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ],
    });
```

4: Run the following command
```
cdk synth
```

5: Then
```
cdk diff
```
6: Then
```
cdk deploy
```


Let’s talk about the code for the VPC we just created. Notice a property called ‘subnetConfiguration’. What is it and why is it needed? If we omit it CDK will create a few networking components inside our VPC that we don’t need. Stuff like Public Subnets, Nat Gateways, and Internet Gateway. Those components are only needed if our Lambda code is accessing an IP that is outside of our VPN. Since this is not our use-case (and in most cases, it won’t be your use-case), we rather keep things simple and more secure. Setting ‘subnetType: ec2.SubnetType.ISOLATED’, tells CDK to only create a Private Subnet without the other components. To learn more about the various options you have you can read the documentation for the VPC Construct.










# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

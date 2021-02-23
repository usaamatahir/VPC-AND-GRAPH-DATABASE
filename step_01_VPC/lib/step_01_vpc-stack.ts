import * as cdk from "@aws-cdk/core";
import * as ec2 from "@aws-cdk/aws-ec2";

export class Step01VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ==================================================================
    // Defining the VPC
    // ==================================================================

    const vpc = new ec2.Vpc(this, "VPC", {
      subnetConfiguration: [
        {
          name: "Ingress",
          cidrMask: 24,
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ],
    });
  }
}

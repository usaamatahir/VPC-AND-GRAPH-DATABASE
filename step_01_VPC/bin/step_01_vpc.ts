#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Step01VpcStack } from '../lib/step_01_vpc-stack';

const app = new cdk.App();
new Step01VpcStack(app, 'Step01VpcStack');

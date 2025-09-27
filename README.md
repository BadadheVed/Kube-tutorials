# To Create a new cluster

1. Using The Kind

   ```bash
   kind create cluster --config cluster.yml --name services
   ```

   -> Here the cluster.yml -> Config File services -> Name of the cluster

2.Using the EKSCL(AWS CloudShell)

    ```bash
    eksctl create cluster --name learningks --region ap-south-1 --nodegroup-name learning-ks-nodes --node-type t2.micro --nodes 3
    ```

`bash kubectl exec -it mongo-pod -- /bin/sh `

this above command is to go into the mongo container

`bash kubectl exec -it mongo-pod -- mongo `

this means opening the mongo Shell directly
-> Here the Node Types-> EC2 Instance Types

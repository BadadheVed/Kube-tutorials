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

    -> Here the Node Types-> EC@ INstance Types

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

```

--> Run this command to get the metriccs server installed on teh k8's Cluster

```bash
kubectl top pods
```

--> To get the metrics of teh ndoe

```bash
kubectl top nodes
```

--> To get the metrics of the node

```bash
kubectl patch service metrics-server -n kube-system --type='json' -p='[
{
"op": "replace",
"path": "/spec/selector",
"value": {"k8s-app": "metrics-server"}
}
]'
```

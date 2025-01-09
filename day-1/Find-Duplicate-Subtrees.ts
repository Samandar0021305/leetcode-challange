function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const res: TreeNode[] = [];
  const map = new Map<string, number>();
  const dfs = (node: TreeNode | null): string => {
    if (!node) return "#";
    const left = dfs(node.left);
    const right = dfs(node.right);
    const subTree = `${node.val},${left},${right}`;
    const count = map.get(subTree) || 0;
    if (count === 1) {
      res.push(node);
    }
    map.set(subTree, count + 1);
    return subTree;
  };
  dfs(root);
  return res;
}

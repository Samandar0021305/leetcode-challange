function countPairs(root: TreeNode | null, distance: number): number {
  let result = 0;
  const dfs = (node: TreeNode | null): number[] => {
    if (!node) return [];
    if (!node.left && !node.right) return [1];
    const leftDistances = dfs(node.left);
    const rightDistances = dfs(node.right);
    for (const left of leftDistances) {
      for (const right of rightDistances) {
        if (left + right <= distance) {
          result++;
        }
      }
    }
    const updatedDistances: number[] = [];
    for (const d of [...leftDistances, ...rightDistances]) {
      if (d + 1 < distance) {
        updatedDistances.push(d + 1);
      }
    }
    return updatedDistances;
  };

  dfs(root);
  return result;
}

import { getPackageDependencies } from "../build-utils/src/pkg";
import { epPackage } from "../build-utils/src/paths";

export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage);
  console.log("dependencies", dependencies)
  console.log("peerDependencies", peerDependencies)
  return (id: string) => {
    const packages: string[] = [...peerDependencies];
    if (!options.full) {
      packages.push("solid-js", ...dependencies);
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    );
  };
};

import { cn } from "../../utils/cn.js";

export default function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}

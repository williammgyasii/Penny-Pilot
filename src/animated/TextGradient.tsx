import { cn } from "@/lib/utils";

declare type Variants = "small" | "medium" | "large";
declare type GradientColors = "gray" | "green";
declare type TextGradientProps = {
  text: string;
  from?: string;
  via?: string;
  to?: string;
  variants: Variants;
  className?: string;
  gradientType?: GradientColors;
};

export default function TextGradient({
  gradientType = "gray",
  ...props
}: TextGradientProps) {
  const from = props.from || "from-orange-700";
  const via = props.via || "via-blue-500";
  const to = props.to || "to-green-400";

  const styles = cn(
    "bg-gradient-to-r text-purple-500 text-white font-bold text-5xl text-transparent bg-clip-text animate-gradient",
    props.className,
    "bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]"
  );

  return <h1 className={styles}>{props.text}</h1>;
}

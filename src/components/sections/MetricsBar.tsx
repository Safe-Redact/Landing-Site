import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { metrics } from "@/content/metrics-bar";

function MetricsBar() {
  return (
    <section className="relative -mt-1 z-10 border-y border-surface-300 bg-surface-50">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-0 divide-x divide-surface-300 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <AnimateOnScroll key={metric.label} delay={i * 80}>
              <div className="py-8 text-center sm:py-10">
                <div className="text-display-sm font-bold text-accent">{metric.value}</div>
                <div className="mt-1 text-body font-semibold text-primary-800">{metric.label}</div>
                <div className="mt-1 text-body-sm text-primary-500">{metric.description}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export { MetricsBar };

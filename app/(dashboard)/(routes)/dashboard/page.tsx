"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { tools } from "./constants";

export default function DashboardPage() {

  const router = useRouter();

  return (
    <main className="">
      <section className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">AI-Powered Magic, Courtesy of ArtiGenX</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          ArtiGenX: Chat with the Genius AI - Unleash AI&apos;s Creative Power – Experience Tomorrow&apos;s Innovation Today.
        </p>
      </section>
      <section className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => {
          return (
            <Card onClick={() => router.push(tool.href)} key={tool.href} className="group p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-x-4">
                <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                  <tool.icon className={cn('w-8 h-8', tool.color)} />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:animate-bounce" />
            </Card>
          )
        })}
      </section>
    </main>
  )
}

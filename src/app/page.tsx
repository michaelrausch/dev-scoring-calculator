"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ICEScoreCard } from "@/components/scoring/ICEScoreCard"
import { BugScoreCard } from "@/components/scoring/BugScoreCard"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="ice" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ice">Feature Scoring (ICE)</TabsTrigger>
          <TabsTrigger value="bugs">Bug Scoring</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ice">
          <ICEScoreCard />
        </TabsContent>
        
        <TabsContent value="bugs">
          <BugScoreCard />
        </TabsContent>
      </Tabs>
    </div>
  )
}

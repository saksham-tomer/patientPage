"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "../components/Card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200">
      <div className="pt-8 pb-12">
        {/*Initial Page area */}
        <span className="text-4xl bg-gradient-to-tr from-purple-400 to-teal-400 text-transparent bg-clip-text">
          Browse for the doctor that suits you needs
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Tabs defaultValue="Grid" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Grid">Grid</TabsTrigger>
            <TabsTrigger value="Scroll">Scroll</TabsTrigger>
          </TabsList>
          <TabsContent value="Grid">
            <div className="grid pt-8 grid-cols-2 gap-12">
              <Card props={{ name: "saksham" }} />
              <Card props={{ name: "saksham" }} />
              <Card props={{ name: "saksham" }} />
              <Card props={{ name: "saksham" }} />
            </div>
          </TabsContent>
          <TabsContent value="Scroll">
            <ResizablePanelGroup
              direction="vertical"
              className="max-w-xl rounded-lg border-red-400"
            >
              <ResizablePanel defaultSize={100}>
                <div className="flex h-[200 px] items-center justify-center p-6">
                  One
                </div>
              </ResizablePanel>
              <ResizableHandle />
            </ResizablePanelGroup>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

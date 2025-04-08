import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from 'lucide-react'
import React from 'react'
import { HiMiniCog6Tooth } from "react-icons/hi2";

const CreateNew = () => {
  return (
    <div className="">
      <div className="my-5">
        <h1 className="text-4xl font-bold my-2">Hello Eric Omotolani</h1>
        <p className="text-sm">Welcome to your dashboard</p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {Array.from(Array(20)).map((i) => (
          <Card className="border-2 border-seconday hover:bg-red-100/70 hover:border-destructive rounded-md">
            <CardContent className="flex flex-col gap-2">
              <Button size="icon" variant="secondary" className="rounded-full p-3">
                <HiMiniCog6Tooth className='size-5'/>
              </Button>
              <h1 className="text-xl font-semibold">Nursing Assistant</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos praesentium fugiat dolorem quam esse!
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CreateNew

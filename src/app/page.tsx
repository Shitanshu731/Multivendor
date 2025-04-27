import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">hacker</Button>
        </div>
        <Progress value={19}>asdasd</Progress>
        <Textarea placeholder="asdasd"> </Textarea>
        <Checkbox></Checkbox>
      </div>
    </div>
  );
}

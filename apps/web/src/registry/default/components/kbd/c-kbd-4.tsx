import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/registry/default/ui/tooltip";

export function KbdDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Save</Button>} />
          <TooltipPopup>
            Save Changes <Kbd>S</Kbd>
          </TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Print</Button>} />
          <TooltipPopup>
            Print Document{" "}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </TooltipPopup>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}

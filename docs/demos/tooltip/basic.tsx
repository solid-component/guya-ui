import { Button, Space, Tooltip } from "happy-ui";

export function Basic() {
  return (
    <>
      <div
        style={{
          "max-width": "500px",
          "text-align": "center",
        }}
      >
        <Space>
          <Tooltip
            placement="top-start"
            content={<div>Top Left prompts info</div>}
          >
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip placement="top" content={<div>Top Center prompts info</div>}>
            <Button>top</Button>
          </Tooltip>
          <Tooltip
            placement="top-end"
            content={<div>Top Right prompts info</div>}
          >
            <Button>top-end</Button>
          </Tooltip>
        </Space>
        <div
          style={{
            display: "flex",
            "justify-content": "space-between",
          }}
        >
          <Tooltip
            placement="left-start"
            content={<div>Left top prompts info</div>}
          >
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip
            placement="right-start"
            content={<div>Right top prompts info</div>}
          >
            <Button>right-start</Button>
          </Tooltip>
        </div>
        <div
          style={{
            height: "70px",
            display: "flex",
            "align-items": "center",
            "justify-content": "space-between",
          }}
        >
          <Tooltip placement="left" content={<div>Left prompts info</div>}>
            <Button>left</Button>
          </Tooltip>
          <Tooltip placement="right" content={<div>Right prompts info</div>}>
            <Button>right</Button>
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            "justify-content": "space-between",
          }}
        >
          <Tooltip
            placement="left-end"
            content={<div>Left end prompts info</div>}
          >
            <Button>left-end</Button>
          </Tooltip>
          <Tooltip
            placement="right-end"
            content={<div>Right end prompts info</div>}
          >
            <Button>right-end</Button>
          </Tooltip>
        </div>
        <Space>
          <Tooltip
            placement="bottom-start"
            content={<div>Bottom Left prompts info</div>}
          >
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip
            placement="bottom"
            content={<div>Top Center prompts info</div>}
          >
            <Button>top</Button>
          </Tooltip>
          <Tooltip
            placement="bottom-end"
            content={<div>Bottom Right prompts info</div>}
          >
            <Button>bottom-end</Button>
          </Tooltip>
        </Space>
      </div>
    </>
  );
}

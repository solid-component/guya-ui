import { Button, Space, Popover } from "happy-ui";

export function Basic() {
  const title = () => (
    <div
      style={{
        "font-size": "16px",
        "font-weight": 700,
        "margin-bottom": '12px'
      }}
    >
      Title
    </div>
  );
  return (
    <>
      <div
        style={{
          "max-width": "500px",
          "text-align": "center",
        }}
      >
        <Space>
          <Popover
            showArrow={false}
            placement="top-start"
            content={<div>{title()}Top Left prompts info</div>}
          >
            <Button>top-start</Button>
          </Popover>
          <Popover
            placement="top"
            content={<div>{title()}Top Center prompts info</div>}
          >
            <Button>top</Button>
          </Popover>
          <Popover
            placement="top-end"
            content={<div>{title()}Top Right prompts info</div>}
          >
            <Button>top-end</Button>
          </Popover>
        </Space>
        <div
          style={{
            display: "flex",
            "justify-content": "space-between",
          }}
        >
          <Popover
            placement="left-start"
            content={<div>{title()}Left top prompts info</div>}
          >
            <Button>left-start</Button>
          </Popover>
          <Popover
            placement="right-start"
            content={<div>{title()}Right top prompts info</div>}
          >
            <Button>right-start</Button>
          </Popover>
        </div>
        <div
          style={{
            height: "70px",
            display: "flex",
            "align-items": "center",
            "justify-content": "space-between",
          }}
        >
          <Popover
            placement="left"
            content={<div>{title()}Left prompts info</div>}
          >
            <Button>left</Button>
          </Popover>
          <Popover
            placement="right"
            content={<div>{title()}Right prompts info</div>}
          >
            <Button>right</Button>
          </Popover>
        </div>
        <div
          style={{
            display: "flex",
            "justify-content": "space-between",
          }}
        >
          <Popover
            placement="left-end"
            content={<div>{title()}Left end prompts info</div>}
          >
            <Button>left-end</Button>
          </Popover>
          <Popover
            placement="right-end"
            content={<div>{title()}Right end prompts info</div>}
          >
            <Button>right-end</Button>
          </Popover>
        </div>
        <Space>
          <Popover
            placement="bottom-start"
            content={<div>{title()}Bottom Left prompts info</div>}
          >
            <Button>bottom-start</Button>
          </Popover>
          <Popover
            placement="bottom"
            content={<div>{title()}Top Center prompts info</div>}
          >
            <Button>top</Button>
          </Popover>
          <Popover
            placement="bottom-end"
            content={<div>{title()}Bottom Right prompts info</div>}
          >
            <Button>bottom-end</Button>
          </Popover>
        </Space>
      </div>
    </>
  );
}

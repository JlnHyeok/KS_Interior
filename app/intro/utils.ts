export function makeTitle(pathname: string, setTitle: React.Dispatch<any>) {
  switch (pathname) {
    case "/intro/outline":
      setTitle({
        title: "KS Interior vision",
        content: "KS인테리어의 회사 이념을 확인해보세요.",
      })
      break
    case "/intro/culture":
      setTitle({
        title: "Enterprise culture",
        content: "KS인테리어의 기업 문화를 확인해보세요.",
      })
      break
    case "/intro/history":
      setTitle({
        title: "KS Interior History",
        content: "KS인테리어의 연혁을 확인해보세요.",
      })
      break
    case "/intro/award":
      setTitle({
        title: "Award",
        content: "KS인테리어의 수상 내역을 확인해보세요.",
      })
      break
    case "/intro/location":
      setTitle({
        title: "Location",
        content: "KS인테리어의 위치를 확인해보세요.",
      })
      break
  }
}

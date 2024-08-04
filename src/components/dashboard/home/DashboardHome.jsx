import ShowItems from "./ShowItems"

const DashboardHome = () => {
  const folders = ["new folder1", "new folder2"]
  const files = ["new file1", "new file2"]
  return (
    <div className="flex flex-col gap-y-6 pt-6">

      <ShowItems title="Created Folders" items={folders} />
      <ShowItems title="Created Files" items={files} />
      
    </div>
  )
}

export default DashboardHome

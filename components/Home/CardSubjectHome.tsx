import Image from "next/image"

type propsType = {
  img: string | null,
  name: string,
  student: number
}

const CardSubject = (props: propsType) => {
  return (
    <div className="w-full h-fit py-2 fit border rounded-md flex flex-col gap-4 hover:-translate-y-1 shadow-md  transition-transform duration-300 bg-card">
      <div className="relative w-auto m-2 h-65 flex justify-center items-center bg-accent rounded-md overflow-hidden">
        {(props.img === null ? props.name : <Image src={props.img} alt={props.name} fill className="object-cover "/>)}
      </div>
      <div className="w-full h-15">
        <div className="px-4 ">
          <h1>Name : {props.name}</h1>
        </div>
        <div className="px-4">
          <p>Student : {props.student}</p>
        </div>
      </div>
    </div>
  )
}
export default CardSubject
import { childrenProps } from "../../../utils/props"

function FormSkeletal({ children }: childrenProps) {
  return (
    <div className="w-11/12 lg:w-3/4 border-2 rounded-lg p-4 bg-secondary-100 shadow-md">
      {children}
    </div>
  )
}

export default FormSkeletal

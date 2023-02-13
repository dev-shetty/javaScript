import ImageMenu from "../components/Form/components/ImageMenu"
import FormSkeletal from "../components/Form/wrapper/FormSkeletal"

function FormPage() {
  return (
    <FormSkeletal>
      <div className="grid grid-cols-[20%_80%] ">
        <div>
          <ImageMenu />
        </div>
        <div></div>
      </div>
    </FormSkeletal>
  )
}

export default FormPage

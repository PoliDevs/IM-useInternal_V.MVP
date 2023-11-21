import React from "react";
import s from "./configForm.module.scss";
import SubTitle from "../../atom/subTitle/SubTitle";
import LabelInput from "../../atom/labelInput/LabelInput";

export default function ConfigForm({subTitle_text,label_text_1,label_text_2}) {
  return (
    <section>
      <SubTitle text={subTitle_text} />
      <>
        <LabelInput text={label_text_1} type="text" name="label_1" />
        <LabelInput text={label_text_2} type="number" name="label_2" />
      </>
    </section>
  );
}

import ContentColumn from "../../atom/contentColumn/ContentColumn";
import Title from "../../atom/Title/Title";
import Paragraph from "../../atom/Paragraph/Paragraph";
import Separator from '../../atom/separator/Separator';

export default function CartelPlanUno({width,height,margin,title,text_1,text_2, text_3, text_4, text_6, text_7, text_8}) {
  return (
    <ContentColumn background={"#F0F0F0"} height={height}  width={width} alignItems={"start"} margin={margin} marginBottom={"5px"} boxShadow={"0px 15px 15px -15px #989898"} >
        <Title icon={"LockClosed"} textAlign="start" color={"#989898"} marginLeft={"10px"} padding={"0"} bold text={title} />
        <Separator height={"10px"}/>
        <Paragraph marginLeft={"10px"} noMargin color={"#989898"} text={text_1} />
        <Paragraph marginLeft={"10px"} noMargin color={"#989898"}  text={text_2} />
        <Paragraph marginLeft={"10px"} noMargin color={"#989898"} text={text_3} />
        <Paragraph marginLeft={"10px"} noMargin color={"#989898"} text={text_4} />
        <Paragraph marginLeft={"10px"} noMargin color={"#989898"} text={text_7} />
        <Paragraph marginLeft={"10px"} noMargin color={"#989898"} text={text_8} />
        <Separator height={"10px"}/>
        <Paragraph marginLeft={"10px"} noMargin color={"#989898"} text={text_6} />
        
    </ContentColumn>
  )
}

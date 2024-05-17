import PropTypes from "prop-types";
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="flex flex-col gap-1 items-center justify-center my-5">
            <h2 className="text-[#D99904]">--- {heading} ---</h2>
            <p className="py-2 border-t-2 border-b-2 text-2xl font-bold px-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;

SectionTitle.propTypes = {
    heading:PropTypes.string,
    subHeading:PropTypes.string
}
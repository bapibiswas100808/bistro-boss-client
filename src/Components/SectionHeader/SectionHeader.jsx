import PropTypes from "prop-types";
const SectionHeader = ({ headerText, paraText }) => {
  return (
    <div className="text-center">
      <p className="text-orange-400 mb-3">{paraText}</p>
      <h2 className="text-xl font-bold border-b-2 border-t-2 py-2 uppercase inline-block mb-5">
        {headerText}
      </h2>
    </div>
  );
};

export default SectionHeader;
SectionHeader.propTypes = {
  headerText: PropTypes.string,
  paraText: PropTypes.string,
};

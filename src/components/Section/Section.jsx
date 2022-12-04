import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

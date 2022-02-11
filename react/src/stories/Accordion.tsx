import './accordion.css';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core';

interface AccordionProps {
  expanded?: boolean;
  title?: string;
  subtitle?: string;
  content?: any;
  width?: string;
  height?: 'md' | 'lg';
  onChange?: () => void;
}

export const Accordion = ({
  expanded,
  title = 'accordion title',
  subtitle,
  content = 'accordion content',
  width,
  height = 'md',
  onChange,
  ...props
}: AccordionProps): JSX.Element => {
  return (
    <MuiAccordion
      expanded={expanded}
      disableGutters
      elevation={0}
      square
      sx={{
        borderBottom: 'solid 1px #dbdbdb',
        '&.Mui-expanded': {
          marginBottom: '8px'
        },
        width
      }}
      onChange={onChange}
    >
      <AccordionSummary
        expandIcon={<img src="/static/icons/ic_expand.svg" />}
        sx={{
          height: height === 'md' ? '48px' : '80px',
          '&.Mui-expanded': {
            color: 'var(--Primary-aris-Main)'
          }
        }}
      >
        <div className="accordion-title">
          {title}
          {height === 'lg' && subtitle && (
            <div className="accordion-subtitle">{subtitle}</div>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </MuiAccordion>
  );
};

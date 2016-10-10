import './index.css'
import React from 'react'
import IconButton from 'material-ui/IconButton'
import RadioButtonUncheckedIcon from 'material-ui/svg-icons/toggle/radio-button-unchecked'
import RadioButtonCheckedIcon from 'material-ui/svg-icons/toggle/radio-button-checked'

const PageButton = ({pageNum, selected, onPageButtonClick}) => {
  const Icon = selected ? RadioButtonCheckedIcon : RadioButtonUncheckedIcon
  return (
    <IconButton
      onTouchTap={e => onPageButtonClick(e, pageNum)}
      iconStyle={{width: 18, height: 18}}
      style={{width: 18, height: 18, padding: 0}}
    >
      <Icon hoverColor='#f558bf' color='#1f5acc'/>
    </IconButton>
  )
}

const PageSelector = ({page, numPages, onPageButtonClick}) => (
  <div className='PageSelector'>
    {Array.from({length: numPages}).map((v, k) => (
      <div className='PageSelector-button' key={k}>
        <PageButton
          pageNum={k}
          selected={k === page}
          onPageButtonClick={onPageButtonClick}
        />
      </div>
    ))}
  </div>
)

export default PageSelector

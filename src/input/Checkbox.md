```jsx
import { WuiThemeProvider } from '../theme';

<WuiThemeProvider>
  <Checkbox label="Unchecked" />
  <Checkbox label="Unchecked disabled" disabled />
</WuiThemeProvider>;
```

```jsx
import { WuiThemeProvider } from '../theme';

<WuiThemeProvider>
  <Checkbox label="Checked" checked />
  <Checkbox label="Checked disabled" checked disabled />
</WuiThemeProvider>;
```

```jsx
import { useState } from 'react';
import { FormHelperText } from '@material-ui/core';
import { WuiThemeProvider } from '../theme';
import Button from './button';

const title = 'Checkbox Screen Reader Example';

const CheckboxScreenReaderExample = () => {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const label = 'I agree to the terms and conditions.';

  const handleSubmit = e => {
    e.preventDefault();

    if (!agreed) {
      setError('Please agree to continue.');
    }

    console.log(e.target);
  };

  return (
    <>
      <Checkbox
        checked={agreed}
        label={label}
        onChange={() => {
          setAgreed(!agreed);
          setError('');
        }}
        aria-label={`${title} ${label}`}
        aria-describedby="errorMsg"
        id={title}
      />
      <br />
      <div error id="errorMsg" aria-live="assertive">
        {error || <span />}
      </div>
      <br />

      <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

<WuiThemeProvider>
  <h1>{title}</h1>
  <CheckboxScreenReaderExample />
</WuiThemeProvider>;
```

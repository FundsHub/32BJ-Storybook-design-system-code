import { useId, useState, type FormEvent } from 'react';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { FormFieldGroup } from './FormFieldGroup';
import { Input } from './Input';
import { RadioButton } from './RadioButton';
import { Select } from './Select';
import { Textarea } from './Textarea';
import './form-page.css';

type Field = 'name' | 'topic' | 'question' | 'reply' | 'consent';
type Values = { name: string; topic: string; question: string; reply: string; consent: boolean };
const empty: Values = { name: '', topic: '', question: '', reply: '', consent: false };
const messages: Record<Field, string> = {
  name: 'Enter a name.', topic: 'Choose a topic.', question: 'Enter a question.',
  reply: 'Choose a reply method.', consent: 'Confirm the example privacy notice.'
};

/** Interactive example only. No information is transmitted. */
export function FormPage({ mobile = false }: { mobile?: boolean }) {
  const prefix = `form-page-${useId().replace(/:/g, '')}`;
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Field[]>([]);
  const [complete, setComplete] = useState(false);
  const id = (field: Field) => `${prefix}-${field}`;
  const hasError = (field: Field) => errors.includes(field);
  function update<K extends Field>(field: K, value: Values[K]) {
    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => current.filter(item => item !== field));
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Field[] = [];
    if (!values.name.trim()) next.push('name');
    if (!values.topic) next.push('topic');
    if (!values.question.trim()) next.push('question');
    if (!values.reply) next.push('reply');
    if (!values.consent) next.push('consent');
    setErrors(next);
    if (next.length) {
      document.getElementById(id(next[0]))?.focus();
    } else {
      setComplete(true);
    }
  }
  return (
    <div className="ds-page-patterns ds-form-page" data-size={mobile ? 'mobile' : 'desktop'} data-fund="health">
      <div className="ds-page-patterns__surface">
        <header className="ds-page-patterns__intro">
          <p className="ds-page-patterns__eyebrow">Form page example</p>
          <h1>Ask a question</h1>
          <p className="ds-page-patterns__lede">Use this example to review the field order, validation, consent, and submission states.</p>
        </header>
        <p className="ds-page-patterns__note">Demonstration only. Do not enter personal or medical information. Nothing you enter here is sent or saved.</p>
        {complete ? (
          <div className="ds-form-page__success" role="status">
            <h2>Example complete</h2>
            <p>This shows the confirmation state. Your information was not sent.</p>
            <Button type="button" variant="secondary" onClick={() => { setValues(empty); setErrors([]); setComplete(false); }}>Start again</Button>
          </div>
        ) : (
          <form className="ds-form-page__form" onSubmit={submit} noValidate>
            {errors.length > 0 && (
              <div className="ds-form-page__errors" role="alert" aria-label="Check these fields">
                <strong>Check these fields</strong>
                <ul>{errors.map(field => <li key={field}><a href={`#${id(field)}`}>{messages[field]}</a></li>)}</ul>
              </div>
            )}
            <FormFieldGroup legend="Your question" id={`${prefix}-question-group`} help="Fields marked * are required.">
              <div className="ds-form-page__row">
                <Input id={id('name')} name="name" label="Name *" autoComplete="name" value={values.name} onChange={event => update('name', event.target.value)} error={hasError('name') ? messages.name : undefined} state={hasError('name') ? 'error' : 'default'} />
                <Select id={id('topic')} name="topic" label="Topic *" value={values.topic} onChange={event => update('topic', event.target.value)} error={hasError('topic') ? messages.topic : undefined} state={hasError('topic') ? 'error' : 'default'}>
                  <option value="">Choose a topic</option><option value="benefits">Benefits</option><option value="forms">Forms</option><option value="other">Other</option>
                </Select>
              </div>
              <Textarea id={id('question')} name="question" label="Your question *" value={values.question} onChange={event => update('question', event.target.value)} maxLength={2000} helper="Do not include sensitive medical information." error={hasError('question') ? messages.question : undefined} state={hasError('question') ? 'error' : 'default'} />
            </FormFieldGroup>
            <FormFieldGroup legend="Reply method *" id={`${prefix}-reply-group`} help={hasError('reply') ? messages.reply : 'Choose one option.'}>
              <div className="ds-form-page__choices">
                <RadioButton id={id('reply')} name={`${prefix}-reply`} value="email" label="Email" checked={values.reply === 'email'} onChange={() => update('reply', 'email')} />
                <RadioButton name={`${prefix}-reply`} value="phone" label="Phone" checked={values.reply === 'phone'} onChange={() => update('reply', 'phone')} />
              </div>
            </FormFieldGroup>
            <div className="ds-form-page__consent">
              <Checkbox id={id('consent')} name="consent" checked={values.consent} onChange={event => update('consent', event.target.checked)} aria-invalid={hasError('consent') || undefined} aria-describedby={hasError('consent') ? `${id('consent')}-error` : undefined} label="I have read the example privacy notice *" helper="Replace this wording and link with approved policy content." />
              {hasError('consent') && <p id={`${id('consent')}-error`} className="ds-form-page__field-error">{messages.consent}</p>}
            </div>
            <div className="ds-form-page__actions"><Button type="submit">Submit example</Button><p>Demonstration only. No data is sent.</p></div>
          </form>
        )}
      </div>
    </div>
  );
}

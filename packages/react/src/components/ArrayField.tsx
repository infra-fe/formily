import React from 'react'
import { useForm, useField } from '../hooks'
import { useAttach } from '../hooks/useAttach'
import { FieldContext } from '../shared'
import { JSXComponent, IFieldProps } from '../types'
import { ReactiveField } from './ReactiveField'

export const ArrayField = <D extends JSXComponent, C extends JSXComponent>(
  props: IFieldProps<D, C, Formily.Core.Models.ArrayField>
) => {
  const form = useForm()
  const parent = useField()
  const field = useAttach(
    form.createArrayField({ basePath: parent?.address, ...props })
  )
  return (
    <FieldContext.Provider value={field}>
      <ReactiveField field={field}>{props.children}</ReactiveField>
    </FieldContext.Provider>
  )
}

ArrayField.displayName = 'ArrayField'

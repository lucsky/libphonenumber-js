// This is a legacy function.
// Use `findNumbers()` instead.

import _findPhoneNumbers, { searchPhoneNumbers as _searchPhoneNumbers } from './findPhoneNumbers_'
import { normalizeArguments } from './parsePhoneNumber'

export default function findPhoneNumbers(arg_1, arg_2, arg_3, arg_4)
{
	const { text, options, metadata } = normalizeArguments(arg_1, arg_2, arg_3, arg_4)
	return _findPhoneNumbers(text, options, metadata)
}

/**
 * @return ES6 `for ... of` iterator.
 */
export function searchPhoneNumbers(arg_1, arg_2, arg_3, arg_4)
{
	const { text, options, metadata } = normalizeArguments(arg_1, arg_2, arg_3, arg_4)
	return _searchPhoneNumbers(text, options, metadata)
}
import {type ClassValue, clsx } from 'clsx';
import {twMerge} from 'tailwind-merge';

// receives className values as ...inputs the uses clsx to combine them togeter. 
// This is then passed to twMerge to resolve possible conflicts between Tailwind classes.
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

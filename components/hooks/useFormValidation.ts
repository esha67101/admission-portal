// Custom Hook - Form Validation Logic


import { useState, useCallback } from 'react';

interface ValidationRules {
  [key: string]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => boolean;
  };
}

interface FormErrors {
  [key: string]: string;
}

export function useFormValidation(rules: ValidationRules) {
  const [errors, setErrors] = useState<FormErrors>({});

  // useCallback - Function ko memoize karta hai (re-renders mein same function)
  const validate = useCallback((name: string, value: string): boolean => {
    const rule = rules[name];
    if (!rule) return true;

    // Required validation
    if (rule.required && !value.trim()) {
      setErrors(prev => ({ ...prev, [name]: 'This field is required' }));
      return false;
    }

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: `Minimum ${rule.minLength} characters required` 
      }));
      return false;
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: `Maximum ${rule.maxLength} characters allowed` 
      }));
      return false;
    }

    // Pattern validation (regex)
    if (rule.pattern && !rule.pattern.test(value)) {
      setErrors(prev => ({ ...prev, [name]: 'Invalid format' }));
      return false;
    }

    // Custom validation function
    if (rule.custom && !rule.custom(value)) {
      setErrors(prev => ({ ...prev, [name]: 'Validation failed' }));
      return false;
    }

    // Clear error if validation passes
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });

    return true;
  }, [rules]);

  // Validate all fields at once
  const validateAll = useCallback((formData: { [key: string]: string }): boolean => {
    let isValid = true;
    Object.keys(rules).forEach(field => {
      if (!validate(field, formData[field] || '')) {
        isValid = false;
      }
    });
    return isValid;
  }, [rules, validate]);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return { errors, validate, validateAll, clearErrors };
}


import { FormGroup } from "@angular/forms";

export function confirmPassowrdValidator(controlName: string, matchControlName: string){
    
    return (formGroup:FormGroup) =>{
        const passwordControl = formGroup.controls[controlName];
        const confirmPasswordControl = formGroup.controls[matchControlName];
        if(confirmPasswordControl.errors && confirmPasswordControl.errors['confirmPasswordValidaror']){
        return;
    }
    if (passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({confirmPassowrdValidator:true})
    }
    else
    {
        confirmPasswordControl.setErrors(null)
    }
  }
}
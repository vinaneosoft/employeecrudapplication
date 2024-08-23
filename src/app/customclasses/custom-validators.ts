import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static valueMatch(control:AbstractControl): ValidationErrors | null{
        // secreteCode and confirmCode
        const secreteCode=control.get("secreteCode")?.value;
        const confirmCode=control.get('confirmCode')?.value;
         if(secreteCode!=confirmCode)
            return {match : true}
          else
            return null
    }

    static valueMatch2(secreteCode:string,confirmCode:string): ValidatorFn{
      
         if(secreteCode!=confirmCode)
            return {match : true}
          else
            return null
    }
    
    /**An error map with the required property if the validation check fails, otherwise null */
    /** {required: true} */
}

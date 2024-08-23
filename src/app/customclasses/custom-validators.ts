import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
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
    static valueMatch2(secretecode: string): ValidatorFn {
      return (control:AbstractControl) : ValidationErrors | null=>{
            const confirmcode =control?.value
            if(secretecode!=confirmcode)
                return {match : true}
            else
                return null
      }
    }
    static valueMatch3(formControl1: string, formControl2:string): ValidatorFn {
        return (control:AbstractControl) : ValidationErrors | null=>{
              const val1=control.get(formControl1)?.value
              const val2=control.get(formControl2)?.value
              if(val1!=val2)
                  return {match : true}
              else
                  return null
        }
      }
    /**An error map with the required property if the validation check fails, otherwise null */
    /** {required: true} */
}


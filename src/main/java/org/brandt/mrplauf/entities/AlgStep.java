package org.brandt.mrplauf.entities;

public class AlgStep {

    String Name;
    int stepId;
    Schritt step;

    public AlgStep(String name, Schritt schritt){
        setName(name);
        setStep(schritt);
    }





    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getStepId() {
        return stepId;
    }

    public void setStepId(int stepId) {
        this.stepId = stepId;
    }

    public Schritt getStep() {
        return step;
    }

    public void setStep(Schritt step) {
        this.step = step;
    }


}

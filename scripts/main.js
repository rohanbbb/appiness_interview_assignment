// function to scroll to the top of the screen
function goToTop() {
    window.onload = () => {
        document.querySelector('.go_top').addEventListener('click', e => {
            window.scrollTo(0, 0);
        });
    };
}
goToTop();

// function to repeat testimonials
function repeatTestimonial() {
    let testimonial = document.querySelector('.testimonial'), testimonials = document.querySelector('.testimonials');
    for (let i=0; i<=2; i++) {
        let clone = testimonial.cloneNode(true);
        testimonials.appendChild(clone);
    }
}
repeatTestimonial();

// function to repeat questions
function repeatQuestion() {
    let question = document.querySelector('.question'), questions = document.querySelector('.questions');
    for (let i=0; i<=5; i++) {
        let clone = question.cloneNode(true);
        if (i == 0) {
            clone.innerHTML = "\n                    <div class=\"py-4 d-flex justify-content-between align-items-center\">\n                        <p class=\"doctor_name mb-0\">Which are the hematological diseases that may benefit from bone marrow transplants?</p>\n                        <div>\n                            <img src=\"./images/down_arrow.png\" alt=\"expand\">\n                        </div>\n                    </div>\n                    <hr class=\"line line_light_grey my-2\">\n                ";
        } else if (i == 1) {
            clone.innerHTML = "\n                    <div class=\"py-4 d-flex justify-content-between align-items-center\">\n                        <p class=\"doctor_name mb-0\">Which are the Cancers that may benefit from bone marrow transplants?</p>\n                        <div>\n                            <img src=\"./images/down_arrow.png\" alt=\"expand\">\n                        </div>\n                    </div>\n                    <hr class=\"line line_light_grey my-2\">\n                ";
        } else if (i == 2) {
            clone.innerHTML = "\n                    <div class=\"py-4 d-flex justify-content-between align-items-center\">\n                        <p class=\"doctor_name mb-0\">Do bone marrow failure syndromes require BMT?</p>\n                        <div>\n                            <img src=\"./images/down_arrow.png\" alt=\"expand\">\n                        </div>\n                    </div>\n                    <hr class=\"line line_light_grey my-2\">\n                ";
        } else if (i == 3) {
            clone.innerHTML = "\n                    <div class=\"py-4 d-flex justify-content-between align-items-center\">\n                        <p class=\"doctor_name mb-0\">What are Primary Immune Deficiency diseases ?</p>\n                        <div>\n                            <img src=\"./images/down_arrow.png\" alt=\"expand\">\n                        </div>\n                    </div>\n                    <hr class=\"line line_light_grey my-2\">\n                ";
        } else if (i == 4) {
            clone.innerHTML = "\n                    <div class=\"py-4 d-flex justify-content-between align-items-center\">\n                        <p class=\"doctor_name mb-0\">Which are the immune deficiencies that warrant BMT?</p>\n                        <div>\n                            <img src=\"./images/down_arrow.png\" alt=\"expand\">\n                        </div>\n                    </div>\n                    <hr class=\"line line_light_grey my-2\">\n                ";
        } else if (i == 5) {
            clone.innerHTML = "\n                    <div class=\"py-4 d-flex justify-content-between align-items-center\">\n                        <p class=\"doctor_name mb-0\">What makes transplants at Aster CMI unique?</p>\n                        <div>\n                            <img src=\"./images/down_arrow.png\" alt=\"expand\">\n                        </div>\n                    </div>\n                    <hr class=\"line line_light_grey my-2\">\n                ";
        }
        questions.appendChild(clone);
    }
}
repeatQuestion();

// function to repeat warnings
function repeatWarning() {
    let warning = document.querySelector('.warning'), warnings = document.querySelector('.warnings');
    for (let i=0; i<=8; i++) {
        let clone = warning.cloneNode(true);
        if (i == 0) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/bed.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            Infections warranting multiple hospitalizations\n                        </p>\n                    </div>\n                ";
        } else if (i == 1) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/hand.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            Requirement of intravenous antibiotics to clear infections\n                        </p>\n                    </div>\n                ";
        } else if (i == 2) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/lungs.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            2 or more episodes of pneumonia\n                        </p>\n                    </div>\n                ";
        } else if (i == 3) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/baby_face.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            Family history of death of children at young age due to immune deficiency\n                        </p>\n                    </div>\n                ";
        } else if (i == 4) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/toilet.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            Repeated episodes of diarrhea\n                        </p>\n                    </div>\n                ";
        } else if (i == 5) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/nose.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            2 or more episodes of sinus infections within a year\n                        </p>\n                    </div>\n                ";
        } else if (i == 6) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/ear.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            2 or more episodes of ear discharge\n                        </p>\n                    </div>\n                ";
        } else if (i == 7) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/hand_infection.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            Repeated skin infections\n                        </p>\n                    </div>\n                ";
        } else if (i == 8) {
            clone.innerHTML = "\n                    <div class=\"warning_tabs mb-3\">\n                        <div class=\"warning_pic_container\">\n                            <img src=\"./images/liver.png\" alt=\"failure\">\n                        </div>\n                        <p class=\"transplant_type_text pt-3\">\n                            Repeated abscess formation (liver abscess, brain abscess)\n                        </p>\n                    </div>\n                ";
        }
        warnings.appendChild(clone);
    }
}
repeatWarning();

// function to repeat types
function repeatType() {
    let type = document.querySelector('.type'), types = document.querySelector('.types');
    for (let i=0; i<=3; i++) {
        let clone = type.cloneNode(true);
        if (i == 0) {
            clone.innerHTML = "\n                    <div class=\"d-flex align-items-start\">\n                        <img src=\"./images/plus.png\" alt=\"plus\" class=\"plus\">\n                        <p class=\"transplant_type_text\">\n                            Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.\n                        </p>\n                    </div>\n                ";
        } else if (i == 1) {
            clone.innerHTML = "\n                    <div class=\"d-flex align-items-start\">\n                        <img src=\"./images/plus.png\" alt=\"plus\" class=\"plus\">\n                        <p class=\"transplant_type_text\">\n                            Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.\n                        </p>\n                    </div>\n                ";
        } else if (i == 2) {
            clone.innerHTML = "\n                    <div class=\"d-flex align-items-start\">\n                        <img src=\"./images/plus.png\" alt=\"plus\" class=\"plus\">\n                        <p class=\"transplant_type_text\">\n                            Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.\n                        </p>\n                    </div>\n                ";
        } else if (i == 3) {
            clone.innerHTML = "\n                    <div class=\"d-flex align-items-start\">\n                        <img src=\"./images/plus.png\" alt=\"plus\" class=\"plus\">\n                        <p class=\"transplant_type_text\">\n                            Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.\n                        </p>\n                    </div>\n                ";
        }
        types.appendChild(clone);
    }
}
repeatType();

// function to repeat doctors
function repeatDoctor() {
    let doctor = document.querySelector('.doctor'), doctors = document.querySelector('.doctors');
    for (let i=0; i<=2; i++) {
        let clone = doctor.cloneNode(true);
        if (i == 0) {
            clone.innerHTML = "\n                    <div class=\"d-flex justify-content-center align-items-center flex-column text-center pt-4 pb-5\">\n                        <span class=\"default_green_heading_small pb-4\">Adult BMT </span>\n                        <img src=\"./images/drpic.png\" alt=\"Doctor Picture\">\n                        <span class=\"doctor_name pt-4\">Dr. Vijay Agarwal</span>\n                        <span class=\"doctor_speciality pt-2\">MD, MRCP, PhD,CCT <br> Lead &amp; Sr. Consultant - Medical Oncology &amp; Haematology</span>\n                        <hr class=\"line doctor_line mb-4\">\n                        <span class=\"doctor_info pt-1\">Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.</span>\n                        <span class=\"pt-4\">\n                            <button class=\"button button_blue_gradient text-white\">Know More</button>\n                        </span>\n                    </div>\n                ";
        } else if (i == 1) {
            clone.innerHTML = "\n                    <div class=\"d-flex justify-content-center align-items-center flex-column text-center pt-4 pb-5\">\n                        <img src=\"./images/drpic.png\" alt=\"Doctor Picture\">\n                        <span class=\"doctor_name pt-4\">Dr. Vijay Agarwal</span>\n                        <span class=\"doctor_speciality pt-2\">MD, MRCP, PhD,CCT <br> Lead &amp; Sr. Consultant - Medical Oncology &amp; Haematology</span>\n                        <hr class=\"line doctor_line mb-4\">\n                        <span class=\"doctor_info pt-1\">Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.</span>\n                        <span class=\"pt-4\">\n                            <button class=\"button button_blue_gradient text-white\">Know More</button>\n                        </span>\n                    </div>\n                ";
        } else if (i == 2) {
            clone.innerHTML = "\n                    <div class=\"d-flex justify-content-center align-items-center flex-column text-center pt-4 pb-5\">\n                        <img src=\"./images/drpic.png\" alt=\"Doctor Picture\">\n                        <span class=\"doctor_name pt-4\">Dr. Vijay Agarwal</span>\n                        <span class=\"doctor_speciality pt-2\">MD, MRCP, PhD,CCT <br> Lead &amp; Sr. Consultant - Medical Oncology &amp; Haematology</span>\n                        <hr class=\"line doctor_line mb-4\">\n                        <span class=\"doctor_info pt-1\">Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.</span>\n                        <span class=\"pt-4\">\n                            <button class=\"button button_blue_gradient text-white\">Know More</button>\n                        </span>\n                    </div>\n                ";
        }
        doctors.appendChild(clone);
    }
}
repeatDoctor();

//add testimonial arrow click functions
function rightArrow() {
    let testimonial = document.getElementsByClassName('testimonial');
    let l = 0;
    l++;
    for (let i of testimonial) {
        if (l==0) {
            i.style.left = "0px";
        }
        if (l==1) {
            i.style.left = "-1000px";
        }
        if (l>1) {
            l = 1;
        }
    }
}
function leftArrow() {
    let testimonial = document.getElementsByClassName('testimonial');
    let l = 1;
    l--;
    for (let i of testimonial) {
        if (l==0) {
            i.style.left = "0px";
        }
        if (l<0) {
            l = 0;
        }
    }
}
function testimonialSlide() {
    let left_arrow = document.querySelector('#left_arrow');
    let right_arrow = document.querySelector('#right_arrow');
    left_arrow.addEventListener('click', () => {
        leftArrow();
    });
    right_arrow.addEventListener('click', () => {
        rightArrow();
    });
}
testimonialSlide();
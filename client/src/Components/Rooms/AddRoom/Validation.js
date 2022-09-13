export const ValidateAddNewMenu = (formData) => {
    const messages = {
        NAME_EMPTY: "The Room Name should have at least be 5 Characters. ",
        RENT_EMPTY: "The Rent Per Day should have at least 5 Numbers. ",
        FEV_EMPTY: "The Features should have at least be 20 Characters",
        DESCRIPTION_EMPTY: "The Description should at least 20 Characters",
    };

    const output = {
        status: false,
        message: null
    };

    if (formData.name.length <= 5) {
        output.message = messages.NAME_EMPTY;
        output.status = false;
        return output;

    }

    if (formData.rentperday.length <= 4) {
        output.message = messages.RENT_EMPTY;
        output.status = false;
        return output;
    }

    if (formData.features.length <= 20) {
        output.message = messages.FEV_EMPTY;
        output.status = false;
        return output;
    }

    if (formData.description.length <= 20) {
        output.message = messages.DESCRIPTION_EMPTY;
        output.status = false;
        return output;
    }

    else {
        output.status = true;
        return output;
    }
};
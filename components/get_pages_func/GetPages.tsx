import Bus_page from "../category_pages/bus/Bus_page";
import Train_page from "../category_pages/train/Train_page";
import InFlights_page from "../category_pages/in-flights/InFlights_page";
import OutFlights_page from "../category_pages/out-flights/OutFlights_page";
import Tour_page from "../category_pages/tour/Tour_page";

export const GetPages = (index: number) => {
    if (index == 0) {
        return (
            <InFlights_page/>
        )
    }
    else if (index == 1) {
        return (
            <OutFlights_page/>
        )
    }
    else if (index == 2) {
        return (
            <Train_page/>
        )
    }
    else if (index == 3) {
        return (
            <Bus_page/>
        )
    }
    // else if (index == 4) {
    //     return (
    //         <Tour_page/>
    //     )
    // }
}
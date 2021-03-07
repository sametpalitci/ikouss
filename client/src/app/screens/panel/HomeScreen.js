import '../../stylesheets/panel/PanelSidebar.css'
import {
    PanelInclusive,
    DashboardCard,
    DashboardTable,
    DashboardAddTask
} from '../../components/panel';

const HomeScreen = () => {
    return (
        <PanelInclusive>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <DashboardCard
                            theme={"warning"}
                            title={"17 March, 2021"}
                            description={"Good Morning!"}
                            emoji={"🌇"}
                        />
                    </div>
                    <div className="col-md-6">
                        <DashboardCard
                            theme={"primary"}
                            title={"Bugünün Listesi Hazır!"}
                            description={"2 Görev"}
                            emoji={"🚀"}
                        />
                    </div>
                    <div className="col-md-12 my-4">
                        <DashboardAddTask />
                    </div>
                    <div className="col-md-12 ">
                        <DashboardTable />
                    </div>
                </div>
            </div>
        </PanelInclusive>
    );
}

export {HomeScreen};

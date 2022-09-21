import {
    ArchiveBoxIcon,
    ChartBarSquareIcon,
    ClockIcon,
    GlobeAltIcon,
    HomeIcon,
    BoltIcon,
    PauseIcon,
    PlayIcon,
    HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
    return (
        <div className="bg-secondary hidden md:inline-block text-white pt-24 h-screen">
            <div className="flex flex-col">
                <SidebarButton
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="Home"
                />
                <SidebarButton
                    icon={<GlobeAltIcon className="w-6 h-6" />}
                    label="Explore"
                />
                <SidebarButton
                    icon={<BoltIcon className="w-6 h-6" />}
                    label="Shorts"
                />
                <SidebarButton
                    icon={<ChartBarSquareIcon className="w-6 h-6" />}
                    label="Trending"
                />
            </div>
            <hr className="border-t-[0.1px] border-gray-600 opacity-60 m-4" />

            <div className="flex flex-col">
                <SidebarButton
                    icon={<ArchiveBoxIcon className="w-6 h-6" />}
                    label="Library"
                />
                <SidebarButton
                    icon={<ClockIcon className="w-6 h-6" />}
                    label="History"
                />
                <SidebarButton
                    icon={<PlayIcon className="w-6 h-6" />}
                    label="Your Video"
                />
                <SidebarButton
                    icon={<PauseIcon className="w-6 h-6" />}
                    label="Watch Later"
                />
                <SidebarButton
                    icon={<HandThumbUpIcon className="w-6 h-6" />}
                    label="Liked"
                />
            </div>
        </div>
    );
};

export default Sidebar;
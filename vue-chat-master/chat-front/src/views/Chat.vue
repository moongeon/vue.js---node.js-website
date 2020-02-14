<template>
    <div>
        <RoomList
                v-if="!open"
                @openRoom="openRoom"
        />
        <Room
                v-else
                :room-seq="roomSeq"
                @closeRoom="closeRoom"
        />
    </div>
</template>

<script>
import Room from '../components/Chat/Room';
import RoomList from '../components/Chat/RoomList';

export default {
    name: 'Chat',
    components: {
        Room,
        RoomList
    },
    data() {
        return {
            open: false
        };
    },
    methods: {
        openRoom(roomSeq) {
            this.open = !this.open;
            this.roomSeq = roomSeq;
        },
        closeRoom() {
            this.open = false;
        }
    }
};
</script>